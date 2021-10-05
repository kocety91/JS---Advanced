class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length === 0) {
      return `${this.title} has ${this._likes.length} likes`;
    } else if (this._likes.length == 1) {
      return `${this._likes[0]} likes this story!`;
    } else {
      return `${this._likes[0]} and ${
        this._likes.length - 1
      } others like this story!`;
    }
  }

  like(username) {
    let userAwreadyLikeStory = this._likes.find((x) => x == username);
    if (userAwreadyLikeStory) {
      throw new Error(`You can't like the same story twice!`);
    }
    if (this.creator == username) {
      throw new Error(`You can't like your own story!`);
    }
    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }

  dislike(username) {
    let userExist = this._likes.find((x) => x == username);
    if (!userExist) {
      throw new Error(`You can't dislike this story!`);
    }
    this._likes = this._likes.filter((x) => x != username);
    return `${username} disliked ${this.title}`;
  }

  comment(username, content, id) {
    // let idExist = this._comments.filter((x) => x.id == id);
    let comment = this._comments.find((x) => x.id === id);

    if (id === undefined || comment === undefined) {
      this._comments.push({
        username,
        content,
        id: this._comments.length + 1,
        replies: [],
      });
      return `${username} commented on ${this.title}`;
    } else if (comment) {
      let reply = {
        id: `${id}.${comment.replies.length + 1}`,
        username: username,
        content: content,
      };
      comment.replies.push(reply);
      return "You replied successfully";
    }
  }

  toString(sortingType) {
    let result = [];
    result.push(`Title: ${this.title}`);
    result.push(`Creator: ${this.creator}`);
    result.push(`Likes: ${this._likes.length}`);
    result.push(`Comments:`);
    if (this._comments.length > 0) {
      this._sortArray(this._comments, sortingType);
      this._comments.forEach((x) => {
        result.push(`-- ${x.id}. ${x.username}: ${x.content}`);
        if (x.replies.length > 0) {
          this._sortArray(x.replies, sortingType);
          x.replies.forEach((r) => {
            result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
          });
        }
      });
    }
    return result.join("\n");
  }

  _sortArray(array, sortingType) {
    if (sortingType === "asc") {
      array.sort((a, b) => a.id - b.id);
    }
    if (sortingType === "desc") {
      array.sort((a, b) => b.id - a.id);
    }
    if (sortingType === "username") {
      array.sort((a, b) => a.username.localeCompare(b.username));
    }
  }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content"); //1 coment
console.log(art.comment("Ammy", "New Content")); //+ 1 commet = 2
art.comment("Zane", "Reply", 1); //1 reply
art.comment("Jessy", "Nice :)"); // +1 comment = 3
console.log(art.comment("SAmmy", "Reply@", 1)); // +1 repply = 2
console.log();
console.log(art.toString("username"));
// console.log();
// art.like("Zane");
// console.log(art.toString("desc"));
