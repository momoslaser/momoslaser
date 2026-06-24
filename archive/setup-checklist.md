# Momo's Laser — Account Setup Checklist

Hi! One account to set up. Once done, Martin takes over — you won't need to touch anything technical.

**Martin's email:** martinusko@gmail.com  
**Time needed:** ~15 minutes  

---

## What you need

- Credit/debit card (~€15–25 one-off, paid yearly)
- That's it

---

## Blacknight — Domain Registration Only

We only need to register the domain name `momoslaser.ie`. No hosting plan needed — the website runs for free on GitHub.

### Create the account

1. Go to **blacknight.ie**
2. Click **Sign Up** and fill in your details
   - Business name: Momo's Laser
   - Address: Strokestown, Co. Roscommon, Ireland
3. In the search bar on the homepage, type `momoslaser.ie` and hit Search
4. If available, click **Add to cart**
5. When asked about hosting — **skip / no thanks** (domain only)
6. Complete checkout with your credit card (~€15–25/year)

You will receive a confirmation email once the domain is registered.

---

### Give Martin access (no need to share your password)

1. Log into your Blacknight account at blacknight.ie
2. Go to **My Account → Account Users** (or **Manage Users**)
3. Click **Add User / Invite User**
4. Enter Martin's email: `martinusko@gmail.com`
5. Set the role to **Administrator**
6. Save — Martin receives an email invitation and sets his own password

**That's it. You're done.**

---

### What Martin gets access to

✅ Manage DNS settings for momoslaser.ie  
✅ Renew the domain  
✅ Configure where the domain points  

### What Martin cannot see or do

❌ Your payment details or invoices  
❌ Cancel or transfer the domain  
❌ Change the account owner  

### Risk

Martin can change where the domain points — meaning he could redirect the website elsewhere. Since he's the one building and maintaining the site, this level of access is necessary. You remain the account owner and the one being billed.

---

## What happens next (Martin's job — nothing needed from you)

### Domain → GitHub Pages

1. Log into Blacknight and update the DNS records to point `momoslaser.ie` at GitHub Pages
2. Set the custom domain inside the GitHub repository settings
3. Enable HTTPS (free, automatic)

After that, anyone visiting `momoslaser.ie` lands on the website.

### Contact Form — EmailJS

The contact form will use **EmailJS** — a free service that sends emails directly from the browser. No hosting or server needed, works perfectly with GitHub Pages.

Martin handles the full setup:

1. Go to **emailjs.com** → Sign Up (free)
2. Click **Add New Service** → choose **Gmail** → connect `momoslaser@gmail.com` → note the **Service ID**
3. Click **Email Templates** → **Create New Template**
   - Set the template to send to `momoslaser@gmail.com`
   - Use these variables in the template body:
     - `{{from_name}}` — sender's name
     - `{{reply_to}}` — sender's email
     - `{{phone}}` — phone number
     - `{{service}}` — selected service
     - `{{message}}` — message text
   - Note the **Template ID**
4. Go to **Account → API Keys** → copy the **Public Key**
5. Open `contact.html` and paste the three values at the top of the script:
   ```
   const EJS_PUBLIC_KEY  = 'your public key here';
   const EJS_SERVICE_ID  = 'your service id here';
   const EJS_TEMPLATE_ID = 'your template id here';
   ```
6. Push to GitHub — the form is live

**Nothing needed from your friend for this step.**

---

## Cost summary

| Item | Cost |
|---|---|
| Domain `momoslaser.ie` | ~€15–25 / year |
| Website hosting (GitHub Pages) | Free |
| Contact form (EmailJS) | Free |
| **Total** | **~€15–25 / year** |

---

*Once the domain is registered and Martin is added, drop him a message and he'll handle the rest.*
