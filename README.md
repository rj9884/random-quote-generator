# Random Quote Generator 💬

![Project Preview](https://github.com/rj9884/random-quote-generator/blob/main/assets/Ui.png)

A dynamic **Random Quote Generator** built with **HTML**, **CSS**, and **JavaScript**, featuring an intuitive design and smooth interactivity. Fetch, display, and share inspiring quotes instantly using an API.

## ✨ Features
- **Fetch New Quotes**: Get inspiring quotes along with their authors and categories at the click of a button.
- **Share Quotes**: Seamlessly share quotes via supported platforms or copy them to the clipboard.
- **Smooth Animations**: Enjoy fade-in transitions for every new quote.
- **Responsive Design**: Optimized for screens of all sizes, from mobile phones to desktops.
- **Keyboard Shortcuts**: Press **'N'** to fetch a new quote quickly.
- **Error Handling**: Displays user-friendly error messages if the API request fails.

## 🚀 Technologies Used
- **HTML**: To structure the interface.
- **CSS**: For styling, animations, and responsive design.
- **JavaScript**: Fetches quotes from the API and handles interactivity.

## 📸 Demo
![Demo GIF](https://github.com/rj9884/random-quote-generator/blob/main/assets/demo.png)

## ⚙️ How It Works
1. **Fetch Quotes**:
   - Connects to the **Quotes API** via fetch requests.
   - Displays the fetched quote, author, and category dynamically.
2. **Share Quotes**:
   - Uses the `Navigator.share` API (if supported) to share directly from the browser.
   - Copies the quote to the clipboard when sharing is unavailable.
3. **Loading State**:
   - Displays a spinner when fetching new data to enhance the user experience.

## 🎨 Design Highlights
- **Background**: A gradient overlay on a motivational image adds a warm touch.
- **Quote Display**: Large, legible font with a glowing focus on author names.
- **Buttons**: Rounded, interactive buttons with hover effects and animations.

## 🛠️ Customization
Want to make it your own? Here are some ideas:
- **Change Themes**: Update the CSS file to include dark/light mode.
- **Add New Categories**: Modify the API configuration to fetch quotes from different genres.
- **Expand Functionality**: Add features like "Save to Favorites" or "Daily Quote Notifications."

## 📂 Project Structure
```
project/
├── index.html        # Main HTML file
├── quote.css         # Styling
├── api.js            # JavaScript logic for fetching quotes
├── assets/           # Images/media
```