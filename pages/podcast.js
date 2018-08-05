import Layout from '../components/Layout';
import 'isomorphic-fetch';
import PodcastPlayer from '../components/PodcastPlayer';

export default class extends React.Component {

  static async getInitialProps({query}) {
    let idAudio = query.id;

    let req = await fetch(`https://api.audioboom.com/audio_clips/${idAudio}.mp3/`)
    let data = await req.json();
    let { body: {audio_clip} } = data;

    return {audio_clip};
  }
  
  render() {
    const { audio_clip } = this.props;

    return (
      <Layout title={audio_clip.title}>
        <PodcastPlayer clip={ audio_clip } />
      </Layout>
    )
  }
}