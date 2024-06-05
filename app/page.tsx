import Video from 'next-video';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Video src='https://ultradrop-production.s3.amazonaws.com/NTVG_Navidad_V4_ef90e288ca.MP4' />
        <Video >
          <source src='https://ultradrop-production.s3.amazonaws.com/NTVG_Navidad_V4_ef90e288ca.MP4' type='video/mp4' />
        </Video>
        <video
        controls
        src='https://ultradrop-production.s3.amazonaws.com/NTVG_Navidad_V4_ef90e288ca.MP4' ></video>
        <video
        controls
        >
          <source src='https://ultradrop-production.s3.amazonaws.com/NTVG_Navidad_V4_ef90e288ca.MP4' type='video/mp4' />
        </video>
    </main>
  );
}
