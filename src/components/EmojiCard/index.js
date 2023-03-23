// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, shuffledEmojisList} = props
  const {emojiUrl, id} = details

  const Clickemoji = () => {
    shuffledEmojisList(id)
  }
  return (
    <li className="Emoji-card-container">
      <button type="button" className="button" onClick={Clickemoji}>
        <img src={emojiUrl} alt="emojiName" />
      </button>
    </li>
  )
}

export default EmojiCard
