import com.example.movieap.entities;
import java.util.list;
public class MovieEntities {
  private String movieid;
  private String moviename;
  private String movieUrl;
  List<String> movieCast;
  private bool like;
  String nooflike;
public MovieEntities(String movieid, String moviename, String movieUrl, List<String> movieCast, bool like,String nooflike) {
    this.movieid = movieid;
    this.moviename = moviename;
    this.movieUrl = movieUrl;
    this.movieCast = movieCast;
    this.like = like;
    this.nooflike=nooflike;
}
public String getMovieid() {
    return movieid;
}
public void setMovieid(String movieid) {
    this.movieid = movieid;
}
public String getMoviename() {
    return moviename;
}
public void setMoviename(String moviename) {
    this.moviename = moviename;
}
public String getMovieUrl() {
    return movieUrl;
}
public void setMovieUrl(String movieUrl) {
    this.movieUrl = movieUrl;
}
public List<String> getMovieCast() {
    return movieCast;
}
public void setMovieCast(List<String> movieCast) {
    this.movieCast = movieCast;
}
public bool getLike() {
    return like;
}
public void setLike(bool like) {
    this.like = like;
}
public String nooflike() {
    return nooflike;
}
public String nooflike(String nooflike) {
    this.nooflike = nooflike;
}

}
