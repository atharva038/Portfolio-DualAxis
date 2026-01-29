# EmailJS Setup Guide for Dual Axis Portfolio

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Verify your email

### Step 2: Add Email Service
1. In EmailJS dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Connect your Gmail account
   - **Outlook**: Use your Outlook email
   - Or any other provider
4. Click **"Connect Account"** and authorize
5. Copy the **Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Click **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. **Important:** Switch to **HTML** mode (toggle in top right of editor)
4. Use this template:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content (HTML):**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #7f8c8d; font-size: 13px">
            Email: {{from_email}}<br>
            Phone: {{phone}}
          </div>
          <p style="font-size: 16px; color: #34495e; margin-top: 10px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
  <div style="margin-top: 20px; font-size: 11px; color: #95a5a6">
    Sent via Dual Axis Contact Form
  </div>
</div>
```

5. Click **"Save"**
6. Copy the **Template ID** (looks like: `template_xyz789`)

**Template Variables to use:**
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email
- `{{phone}}` - Visitor's phone number
- `{{message}}` - Their message
- `{{to_name}}` - Your name (optional, set in Contact.tsx)

### Step 4: Get Public Key
1. Click **"Account"** in top right
2. Go to **"General"** tab
3. Copy your **Public Key** (looks like: `a1b2c3d4e5f6g7h8`)

### Step 5: Update Contact.tsx
Open `/src/components/Contact.tsx` and replace these lines (around line 20-22):

```typescript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

**Example:**
```typescript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'a1b2c3d4e5f6g7h8';
```

### Step 6: Test It!
1. Save the file
2. Refresh your website
3. Fill out the contact form
4. Click "Send message"
5. Check your email inbox! 📧

---

## ✅ What You Get

- ✉️ **Email notifications** to your inbox
- 📊 **Dashboard** to see all submissions
- 🎨 **Success/Error messages** for users
- 🔄 **Loading spinner** while sending
- 🆓 **200 emails/month free**

---

## 🔧 Troubleshooting

**Form not sending?**
- Check that you replaced ALL THREE values (serviceId, templateId, publicKey)
- Make sure you authorized the email service in EmailJS
- Check browser console for errors (F12)

**Emails going to spam?**
- In EmailJS, verify your email domain
- Add your website URL to allowed origins

**Need more emails?**
- Free plan: 200/month
- Upgrade: $7/month for unlimited

---

## 📞 Support
- EmailJS Docs: https://www.emailjs.com/docs/
- Need help? Check the browser console (F12) for error messages

---

**Your contact form is now ready to receive messages! 🎉**
