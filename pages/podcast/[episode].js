import { useRouter } from "next/router";
import episodes from "../../data/episodes";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { episode: "blue-skies" },
        params: { episode: "halflight" },
        params: { episode: "fear-and-love" },
        params: { episode: "all-i-want-is-home" },
        params: { episode: "the-prayer-of-saint-francis" },
        params: { episode: "when-will-my-day-come" },
        params: { episode: "dont-let-the-fear-capture-your-heart" },
        params: { episode: "a-better-love" },
        params: { episode: "return-my-heart-to-my-chest" },
        params: { episode: "benediction-for-the-broken" },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const episodeData = episodes.find((episode) => episode.id === params.episode);
  return {
    props: {
      title: episodeData ? episodeData.title : null,
      data: episodeData ? episodeData.data : null,
    },
  };
}

export default function EpisodePage({ title, data }) {
  const router = useRouter();
  const { episode } = router.query;

  return (
    <>
      <p>Episode {title}</p>
      <p>Data {data}</p>
    </>
  );
}
