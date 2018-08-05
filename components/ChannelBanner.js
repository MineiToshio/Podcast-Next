export default class ChannelBanner extends React.Component {
  render() {

    const {banner, title } = this.props;

    return (
      <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
        <h1>{ title }</h1>

        <style jsx>{`
          .banner {
            width: 100%;
            padding-bottom: 12%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          h1 {
            font-weight: 600;
            padding: 0;
            margin: 0;
            color: white;
            text-shadow: 2px 2px 4px #000000;
            font-size: 40pt;
            padding-top: 13%;
          }
        `}</style>
      </div>
    )
  }
}