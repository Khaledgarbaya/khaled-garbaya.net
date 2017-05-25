import { h, Component } from 'preact';
import style from './style';
import client from '../../lib/client'
import ArticleListItem from '../../components/article/ArticleListItem'
export default class Home extends Component {
  constructor () {
    super()
    this.state = {articles: []}
  }
  componentDidMount () {
    client.getEntries({content_type: 'post'}).then((response) => {
      this.setState({articles: response.items})
    })
  }
  render () {
    const articles = this.state.articles.map((article, i) => <ArticleListItem id={i} key={i} article={article} />)
    return (
      <div className='category-page-posts animated fadeIn'>
        <div className='animated fadeIn'>
          {articles}
        </div>
      </div>
    )
  }
}
