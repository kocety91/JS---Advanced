class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = { picture: 200, photo: 50, item: 250 };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    let articleToLower = articleModel.toLowerCase();
    let isUpper = this._isUpper(articleModel);
    let existingArticle = this.listOfArticles.filter(
      (x) => x.articleName === articleName
    )[0];

    if (!this.possibleArticles.hasOwnProperty(articleToLower)) {
      throw new Error(`This ${articleModel} is not included in this gallery!`);
    }

    if (
      this.possibleArticles.hasOwnProperty(articleToLower) &&
      existingArticle &&
      !isUpper
    ) {
      existingArticle.quantity += quantity;
      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    } else {
      this.listOfArticles.push({
        articleModel: articleToLower,
        articleName: articleName,
        quantity: quantity,
      });

      return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }
  }

  inviteGuest(guestName, personality) {
    let existingGuest = this.guests.filter((x) => x.guestName === guestName)[0];
    if (existingGuest) {
      throw new Error(`${guestName} has already been invited.`);
    }
    this.guests.push({
      guestName: guestName,
      points: this._returnPeronalityPoints(personality),
      purchaseArticle: 0,
    });

    return `You have successfully invited ${guestName}!`;
  }

  buyArticle(articleModel, articleName, guestName) {
    let existingArticle = this.listOfArticles.filter(
      (x) => x.articleName === articleName
    )[0];
    let notMatchArticleModel = false;
    this.listOfArticles.forEach((x) => {
      if (x.articleModel === articleModel && x.articleName == articleName) {
        notMatchArticleModel = true;
      }
    });

    let notExistingGuest = this.guests.filter(
      (x) => x.guestName === guestName
    )[0];

    if (!existingArticle || !notMatchArticleModel) {
      throw new Error(`This article is not found.`);
    }

    if (existingArticle.quantity === 0) {
      return `The ${articleName} is not available`;
    }

    if (!notExistingGuest) {
      return `This guest is not invited`;
    }

    let pointForArticle = 0;

    for (const key in this.possibleArticles) {
      if (key === articleModel) {
        pointForArticle = this.possibleArticles[key];
      }
    }

    if (pointForArticle > notExistingGuest.points) {
      throw new Error(`You need to more points to purchase the article`);
    }
    existingArticle.quantity--;
    notExistingGuest.points -= pointForArticle;
    notExistingGuest.purchaseArticle++;

    return `${guestName} successfully purchased the article worth ${pointForArticle} points.`;
  }

  showGalleryInfo(criteria) {
    let arr = [];
    if (criteria === "article") {
      arr.push(`Articles information:`);
      this.listOfArticles.forEach((x) => {
        arr.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`);
      });
    }
    if (criteria === "guest") {
      arr.push(`Guests information:`);
      this.guests.forEach((x) => {
        arr.push(`${x.guestName} - ${x.purchaseArticle}`);
      });
    }

    return arr.join(" ").trim();
  }

  _returnPeronalityPoints(personality) {
    if (personality === "Vip") {
      return 500;
    }
    if (personality === "Middle") {
      return 250;
    }

    return 50;
  }
  _isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
  }
}

const artGallery = new ArtGallery("Curtis Mayfield");
artGallery.addArticle("picture", "Mona Liza", 3);
artGallery.addArticle("Item", "Ancient vase", 2);
artGallery.addArticle("picture", "Mona Liza", 1);
artGallery.inviteGuest("John", "Vip");
artGallery.inviteGuest("Peter", "Middle");
artGallery.buyArticle("picture", "Mona Liza", "John");
artGallery.buyArticle("item", "Ancient vase", "Peter");
console.log(artGallery.showGalleryInfo("article"));
console.log(artGallery.showGalleryInfo("guest"));
