# ⚙️ Backend API - Company Profile [PT. INLED PUTRA MANDIRI]

Restful API service built with **Express.js** and **MySQL**. Handles form submissions and email dispatching.

## 📦 Installation

1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

## 🗄️ Database Setup

Create a new MySQL database named `compro_db` (or check config).

## 🔑 Environment Variables

Create a `.env` file in the root of the `backend` folder and add the following:

```env
PORT=4000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=compro_db

# Email Configuration (Gmail App Password)
MAIL_SERVICE=gmail
MAIL_USER=your-email@gmail.com
MAIL_PASS=your-app-password
```
