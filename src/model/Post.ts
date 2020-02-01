class Post {
  public name: String
  public title: String
  public data: Date
  public category: String
  public author: String
  public tags: String[]

  constructor(
    name: String,
    title: String,
    data: Date,
    category: String,
    author: String,
    tags: string[]
  ) {
    this.name = name
    this.title = title
    this.data = data
    this.category = category
    this.author = author
    this.tags = tags
  }
}

export default Post
