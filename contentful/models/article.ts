/*
 * The model for article.
 */
export default class Article {
  /* User defined fields
   ============================================ */
  // The title of the article.
  public title: string;

  // The subtitle of the article.
  public subtitle: string;

  // A list of keywords that relates to the article.
  public tags: Array<string>;

  // The url to the banner image of the article.
  public imageUrl: string;

  // The amount of 'upvotes' of the article. The value is arbitrary atm.
  public cheers: number;

  // The language used to compose the article.
  public language: string;

  // The unique identifier to refer the article. Used as url entry.
  public slug: string;

  // The actual content of the article, written in Rich text and translated to html.
  public content: object;

  // The approximate amount of minutes suggested for reading the article.
  public minutes: number;

  // The big umbrella where the article is published in.
  public publication: string;

  // The category of the article.
  public category: string;

  /* Metadata
   ============================================ */
  // The unique identifier for internal uses.
  public id: string;

  // The date and time of creation of the article in ISO format.
  public createdAt: string;

  // The date and time of last modification of the article in ISO format.
  public updatedAt: string;
}
