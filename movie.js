let Movie = function(title, rating) {

    this.title = title;
    this.rating = parseInt(rating);

};


Movie.prototype.isValid = function() {

    if (!this.title) {
        
        return false;

    } else if (isNaN(this.rating) || this.rating < 1 || this.rating > 5) {
        
        return false;

    } else {
        return true;
    }

};

Movie.prototype.toString = function() {
    return this.title + "'s rating:  " + this.rating;
};