# Hosting Momo's Laser on GitHub Pages
### Step-by-step guide — no coding experience needed

---

## What you'll need
- A free GitHub account → [github.com](https://github.com)
- The `index.html` file (downloaded from this chat)

---

## Step 1 — Create a GitHub account
1. Go to **https://github.com** and click **Sign up**
2. Choose a username (e.g. `momoslaser`), enter your email and a password
3. Verify your email when GitHub sends you a confirmation

---

## Step 2 — Create a new repository
1. Once logged in, click the **+** icon (top-right) → **New repository**
2. Fill in:
   - **Repository name:** `momoslaser` *(or any name you like)*
   - **Description:** Momo's Laser Website *(optional)*
   - Set to **Public**
   - ✅ Check **"Add a README file"**
3. Click **Create repository**

---

## Step 3 — Upload your website file
1. Inside your new repository, click **Add file → Upload files**
2. Drag and drop your `index.html` file into the upload box
3. Scroll down and click **Commit changes**

Your file is now on GitHub.

---

## Step 4 — Enable GitHub Pages
1. In your repository, click **Settings** (top tab)
2. In the left sidebar, scroll down and click **Pages**
3. Under **Branch**, change the dropdown from `None` to **`main`**
4. Leave the folder as `/ (root)`
5. Click **Save**

GitHub will now build your site. This takes about 60 seconds.

---

## Step 5 — Visit your live website
After a minute, refresh the Pages settings page. You'll see a green banner:

> **Your site is live at** `https://yourusername.github.io/momoslaser/`

Click that link — your website is now live and publicly accessible!

---

## Adding more images to the carousel later

When you want to add new machine/equipment photos to the carousel:

1. Open `index.html` in a text editor (Notepad on Windows, TextEdit on Mac)
2. Find this comment inside the file:
   ```
   <!-- Add more slides here -->
   ```
3. Just above that comment, copy and paste this block for each new image:
   ```html
   <div class="carousel-slide">
     <img src="YOUR_IMAGE_FILENAME.jpg" alt="Description of image">
   </div>
   ```
4. Upload the new image files to your GitHub repository (same way as Step 3)
5. Upload the updated `index.html` too — GitHub Pages will refresh automatically

> **Tip:** To keep things simple, name your images without spaces, e.g. `machine2.jpg`, `laser-arm.jpg`

---

## Updating the website in future
Any time you want to make changes:
1. Edit your `index.html` file
2. Go to your GitHub repository
3. Click on `index.html` → click the **pencil (edit) icon** → paste your updated code → **Commit changes**

Or use **Add file → Upload files** to replace it by uploading a new version.

---

## Your website address will be:
```
https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/
```
Example: `https://momoslaser.github.io/momoslaser/`

Share this link anywhere — it works on all phones, tablets and computers.
