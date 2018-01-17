import freshTomatoes
import Media

lion_king = Media.Movie("The Lion King", "Circle of Life surrounding Simba and Prideland.", "https://images-na.ssl-images-amazon.com/images/I/41kSXzSlnJL.jpg", "https://www.youtube.com/watch?v=4sj1MT05lAA")

purab_aur_paschim = Media.Movie("Purab aur Paschim", "Direct comparison of cultures of Western and Indian Culture", "https://www.songsmp3.co/assets/images/1/47419-Purab%20Aur%20Pachhim%20(1970).jpg", "https://www.youtube.com/watch?v=rgKfailD7cw")
#print(lion_king.storyline)

#lion_king.show_trailer()

movies = [lion_king, purab_aur_paschim]
freshTomatoes.open_movies_page(movies)