# دليل النشر - ألفا  أوإمكيو

## النشر على Vercel (مستحسن)

### 1. إعداد المشروع على GitHub

```bash
# إنشاء مستودع جديد على GitHub
git init
git add .
git commit -m "Initial commit: OMQ website"
git branch -M main
git remote add origin https://github.com/yourusername/omq.git
git push -u origin main
```

### 2. ربط المشروع بـ Vercel

1. اذهب إلى [Vercel](https://vercel.com)
2. سجل دخولك أو أنشئ حساب جديد
3. اضغط على "New Project"
4. اختر المستودع `omq` من GitHub
5. اضغط على "Import"

### 3. إعداد متغيرات البيئة

في لوحة تحكم Vercel، اذهب إلى Settings > Environment Variables وأضف:

```env
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/omq?retryWrites=true&w=majority
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=https://your-domain.vercel.app
PAYMENT_PROVIDER_KEY=your-payment-provider-key
PAYMENT_PROVIDER_SECRET=your-payment-provider-secret
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
ADMIN_WHATSAPP_NUMBER=whatsapp:+966501234567
```

### 4. إعداد MongoDB Atlas

1. اذهب إلى [MongoDB Atlas](https://cloud.mongodb.com)
2. أنشئ cluster جديد
3. أنشئ مستخدم قاعدة البيانات
4. احصل على connection string
5. أضف IP address الخاص بـ Vercel إلى whitelist

### 5. النشر

1. اضغط على "Deploy" في Vercel
2. انتظر حتى يكتمل النشر
3. احصل على رابط الموقع

## النشر على خادم VPS

### 1. إعداد الخادم

```bash
# تحديث النظام
sudo apt update && sudo apt upgrade -y

# تثبيت Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# تثبيت PM2
sudo npm install -g pm2

# تثبيت Nginx
sudo apt install nginx -y
```

### 2. رفع المشروع

```bash
# استنساخ المشروع
git clone https://github.com/yourusername/omq.git
cd omq

# تثبيت التبعيات
npm install

# بناء المشروع
npm run build
```

### 3. إعداد متغيرات البيئة

```bash
# إنشاء ملف .env
nano .env.local

# إضافة المتغيرات
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/omq
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=https://yourdomain.com
# ... باقي المتغيرات
```

### 4. تشغيل المشروع

```bash
# تشغيل مع PM2
pm2 start npm --name "omq" -- start
pm2 save
pm2 startup
```

### 5. إعداد Nginx

```bash
# إنشاء ملف التكوين
sudo nano /etc/nginx/sites-available/omq

# محتوى الملف
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}

# تفعيل الموقع
sudo ln -s /etc/nginx/sites-available/omq /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 6. إعداد SSL مع Let's Encrypt

```bash
# تثبيت Certbot
sudo apt install certbot python3-certbot-nginx -y

# الحصول على شهادة SSL
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## النشر على Docker

### 1. إنشاء Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### 2. إنشاء docker-compose.yml

```yaml
version: '3.8'

services:
  omq:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
      - NEXTAUTH_URL=${NEXTAUTH_URL}
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - omq
    restart: unless-stopped
```

### 3. تشغيل المشروع

```bash
# بناء وتشغيل
docker-compose up -d

# عرض السجلات
docker-compose logs -f
```

## إعداد قاعدة البيانات

### 1. تشغيل Prisma

```bash
# توليد Prisma client
npx prisma generate

# تطبيق التغييرات على قاعدة البيانات
npx prisma db push

# إدخال البيانات التجريبية
npm run db:seed
```

### 2. إعداد MongoDB

```bash
# إنشاء مستخدم
use omq
db.createUser({
  user: "omq_user",
  pwd: "secure_password",
  roles: [
    { role: "readWrite", db: "omq" }
  ]
})
```

## إعداد الدفع

### 1. HyperPay

```javascript
// إعداد HyperPay
const hyperpayConfig = {
  entityId: process.env.HYPERPAY_ENTITY_ID,
  accessToken: process.env.HYPERPAY_ACCESS_TOKEN,
  baseUrl: process.env.HYPERPAY_BASE_URL,
}
```

### 2. Tap Payments

```javascript
// إعداد Tap
const tapConfig = {
  secretKey: process.env.TAP_SECRET_KEY,
  publicKey: process.env.TAP_PUBLIC_KEY,
  baseUrl: process.env.TAP_BASE_URL,
}
```

## إعداد الإشعارات

### 1. Twilio WhatsApp

```javascript
// إعداد Twilio
const twilioConfig = {
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN,
  whatsappNumber: process.env.TWILIO_WHATSAPP_NUMBER,
}
```

### 2. إرسال إشعار

```javascript
// إرسال إشعار WhatsApp
const sendWhatsAppNotification = async (message) => {
  const client = require('twilio')(twilioConfig.accountSid, twilioConfig.authToken);
  
  await client.messages.create({
    from: twilioConfig.whatsappNumber,
    to: process.env.ADMIN_WHATSAPP_NUMBER,
    body: message
  });
};
```

## مراقبة الأداء

### 1. Vercel Analytics

```javascript
// إضافة Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

### 2. PM2 Monitoring

```bash
# مراقبة العمليات
pm2 monit

# عرض السجلات
pm2 logs omq

# إعادة تشغيل
pm2 restart omq
```

## النسخ الاحتياطي

### 1. قاعدة البيانات

```bash
# نسخ احتياطي من MongoDB
mongodump --uri="mongodb+srv://username:password@cluster.mongodb.net/omq" --out=backup/

# استعادة النسخة الاحتياطية
mongorestore --uri="mongodb+srv://username:password@cluster.mongodb.net/omq" backup/omq/
```

### 2. الملفات

```bash
# نسخ احتياطي للملفات
tar -czf omq-backup-$(date +%Y%m%d).tar.gz /path/to/omq

# استعادة الملفات
tar -xzf omq-backup-20240101.tar.gz
```

## استكشاف الأخطاء

### 1. مشاكل شائعة

```bash
# فحص حالة الخدمات
pm2 status
systemctl status nginx

# فحص السجلات
pm2 logs omq
tail -f /var/log/nginx/error.log

# فحص الاتصال بقاعدة البيانات
npx prisma db pull
```

### 2. إعادة التشغيل

```bash
# إعادة تشغيل الخدمات
pm2 restart omq
sudo systemctl restart nginx

# إعادة تشغيل الخادم
sudo reboot
```

## الأمان

### 1. تحديث النظام

```bash
# تحديث النظام
sudo apt update && sudo apt upgrade -y

# تحديث Node.js
sudo npm install -g npm@latest
```

### 2. جدار الحماية

```bash
# إعداد UFW
sudo ufw enable
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
```

### 3. SSL/TLS

```bash
# تجديد شهادة SSL
sudo certbot renew --dry-run
```

---

**ملاحظة**: تأكد من تحديث جميع كلمات المرور والمفاتيح السرية قبل النشر في الإنتاج.


