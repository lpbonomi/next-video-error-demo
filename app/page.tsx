import Video from 'next-video';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Video src='https://next-videos-ultradrop.s3.us-east-1.amazonaws.com/videos/0hOSpzin-U7fDiifE0H-hnuZ4u_V_tofCJbxpqpNJCA' />
        <Video >
          <source src='https://next-videos-ultradrop.s3.us-east-1.amazonaws.com/videos/0hOSpzin-U7fDiifE0H-hnuZ4u_V_tofCJbxpqpNJCA' type='video/mp4' />
        </Video>
        <video
        controls
        src='https://next-videos-ultradrop.s3.us-east-1.amazonaws.com/videos/0hOSpzin-U7fDiifE0H-hnuZ4u_V_tofCJbxpqpNJCA'></video>
        <video
        controls
        >
          <source src='https://next-videos-ultradrop.s3.us-east-1.amazonaws.com/videos/0hOSpzin-U7fDiifE0H-hnuZ4u_V_tofCJbxpqpNJCA' type='video/mp4' />
        </video>
    </main>
  );
}
