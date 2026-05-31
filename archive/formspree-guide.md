# Sending Contact Form Emails with Formspree
### No API keys. No backend. Free.

---

## Do I need an API?

Not in the traditional sense. Formspree acts as a middleman — your form submits to their server, and they forward the email to your Gmail. You don't write any server code and there's nothing sensitive in your HTML file.

---

## Step 1 — Create a Formspree account

1. Go to **https://formspree.io** and click **Get Started**
2. Sign up with your Gmail address (`momoslaser@gmail.com`)
3. Verify your email when prompted

---

## Step 2 — Create a new form

1. Once logged in, click **+ New Form**
2. Give it a name, e.g. `Momo's Laser Contact`
3. Set the email to `momoslaser@gmail.com`
4. Click **Create Form**

You'll see a screen showing your form endpoint, which looks like:
```
https://formspree.io/f/xyzabcde
```
**Copy that ID** — in this example it's `xyzabcde`.

---

## Step 3 — Add your form ID to contact.html

Open `contact.html` in a text editor and find this line (near line 160):

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with the ID you copied:

```html
<form id="contact-form" action="https://formspree.io/f/xyzabcde" method="POST">
```

Save the file.

---

## Step 4 — Also link the contact page from index.html

Open `index.html` and find the footer section:

```html
<footer>
  &copy; 2025 <a href="mailto:momoslaser@gmail.com">Momo's Laser</a> ...
</footer>
```

You can add a contact link anywhere that feels natural, for example in the footer:

```html
<footer>
  &copy; 2025 Momo's Laser &mdash;
  <a href="contact.html">Contact</a> &mdash; Ireland
</footer>
```

---

## Step 5 — Upload both files to GitHub

Upload both `index.html` and `contact.html` to your GitHub repository (same folder). Your repo should look like:

```
index.html
contact.html
```

---

## Step 6 — Test it

1. Visit your live site and go to the contact page
2. Fill in the form and hit **Send Message**
3. Check `momoslaser@gmail.com` — the message should arrive within seconds
4. **Important:** Formspree will send you a confirmation email the first time — click the link in it to activate your form

---

## Free plan limits

Formspree's free plan allows **50 submissions per month**, which is plenty for a business enquiry form. If you ever need more, their paid plan is $10/month for 1,000 submissions.

---

## What the email looks like when you receive it

You'll get an email from Formspree with:
- **From:** the visitor's email address (so you can reply directly)
- **Subject:** New submission from Momo's Laser Contact
- **Body:** all the fields they filled in — name, phone, service interest, message

---

## Spam protection

Formspree includes basic spam filtering automatically. If you ever get too much spam, you can enable their reCAPTCHA option in the Formspree dashboard for free.
