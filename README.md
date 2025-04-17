# Personalized 🦊Firefox Homepage

A simple customizable homepage for Mozilla Firefox

---

## How to Use

1. **Download or clone this repository.**

2. In Firefox, go to:  
   `Settings → Home → Homepage and new windows`  
   Select **"Custom URLs..."**

3. There paste the path to the `index.html` file. It should look somehing like this:  
`/home/user/Documents/morcillaIndex/index.html`

4. Now it should now be live

---

## How to Personalize It

### In `index.html`
- Edit the `<a>` tags to link to your favorite sites.
- Replace or add **1:1 images** inside the `images/` folder, and update the `src` attributes accordingly.
- Customize the **title** of the page.
- Change the **favicon** (tab icon) if you like.

### In `codigo.js`
- Update the `image_array` with the filenames of your wallpapers located in the `wallpapers/` folder.

> ⚠️ Important:
> - If you **remove** a wallpaper, also remove its filename from the `image_array`.
> - If you **add** a new wallpaper, make sure to include its filename (with extension) in the array.
> - Maintain the correct **file extensions**.

---

## 💬 About

This was just a hobby project — I use it myself, and a friend does too.  
I'd be happy if someone else uses it.

> *"...but I still haven't found what I'm looking for..."*