![PeakCinema Logo](logo.png)

## Description
Your binge-watching headquarters! Find everything you need to know about any movie in seconds. Explore titles, genres, casts, IMDb scores, release dates, and engaging summaries. The App uses [\[OMDb API\]](https://www.omdbapi.com/) to search Any kind of Movie details
## Features
- **Comprehensive Movie Details**: Get all the essential information about your favorite movies.
- **Instant Search & Results**: Quickly find what you're looking for without delays.
- **Genre Exploration**: Browse movies by genre to discover hidden gems.
- **Cast Information**: Learn about the talented actors and crew behind each film.
- **Concise Movie Summaries**: Read engaging summaries to decide your next watch.
- **And More**: Additional features to enhance your movie discovery experience!

## Setup Instructions
### Local Setup
1. **Clone the Repository**:
    ```bash
    git clone https://github.com/AliceUwase/PeakCinema.git
    ```
2. **Open the Application**:
    Open `index.html` in your browser to start using the app.

## Deployment Instructions

The application can be deployed using either the Haproxy or Nginx web server. Below are the steps for both:

### Deployment with Haproxy

1. **Initial Installation and Configuration**:
  - Install and configure Haproxy on your server.

2. **Set Up the Project**:
  - Navigate to `/var/www/html/`:
    ```bash
    cd /var/www/html/
    ```
  - Initialize the directory as a Git repository:
    ```bash
    git init
    ```
  - Set the origin to the repository:
    ```bash
    git remote add origin https://github.com/AliceUwase/PeakCinema.git
    ```
  - Pull the project from the repository:
    ```bash
    git pull origin main
    ```

3. **Restart Haproxy**:
  - Apply the changes by restarting Haproxy:
    ```bash
    sudo systemctl restart haproxy
    ```

Your application should now be live and accessible!

---

### Deployment with Nginx

1. **Initial Installation and Configuration**:
  - Install and configure Nginx on your server.

2. **Set Up the Project**:
  - Navigate to `/var/www/html/`:
    ```bash
    cd /var/www/html/
    ```
  - Initialize the directory as a Git repository:
    ```bash
    git init
    ```
  - Set the origin to the repository:
    ```bash
    git remote add origin https://github.com/AliceUwase/PeakCinema.git
    ```
  - Pull the project from the repository:
    ```bash
    git pull origin main
    ```

3. **Configure Nginx**:
  - Open the Nginx configuration file:
    ```bash
    sudo nano /etc/nginx/sites-available/default
    ```
  - Update the server block to point to your project directory:
    ```nginx
    server {
      listen 80;
      server_name your-domain.com;

      root /var/www/html;
      index index.html;

      location / {
        try_files $uri $uri/ =404;
      }
    }
    ```

4. **Restart Nginx**:
  - Apply the changes by restarting Nginx:
    ```bash
    sudo systemctl restart nginx
    ```

Your application should now be live and accessible!

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript
- **API**: OMDb API (Open Movie Database)
- **Server**: Haproxy (for hosting the application)

## Demo Links
- [Live Site](http://aliceuwase.tech/) 
- [Demo Video](https://youtu.be/2EsL2S24z7I?si=ngmfE37HzSR8FHXu)
- [Github Repo](https://github.com/AliceUwase/PeakCinema.git)

## Contact Information
For questions, feedback, or collaboration opportunities, feel free to reach out via:
- [LinkedIn](www.linkedin.com/in/alice-uwase-359334292)
- [GitHub](https://github.com/AliceUwase)
- Email: a.uwase3@alustudent.com

## Acknowledge
- [\[OMDb API\]](https://www.omdbapi.com/) for movie information
- Visual Studio Code for code editing
- [\[Claude AI\]](https://claude.ai/) for styling suggestions

---

Happy Binge-Watching! 🎥🍿