import { useRouter } from 'next/router';
import Layout from '../../components/Layouts';
import Notes from '../../components/Notes';

export default function VideoPage() {
  const router = useRouter();
  const { videoId } = router.query;

  const notes = 'These are the notes for this video...';

  return (
    <Layout>
      <div className="video-container mb-6">
        <iframe
          className="w-full h-96"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <Notes notes={notes} />
    </Layout>
  );
}