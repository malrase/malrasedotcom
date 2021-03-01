import CityGuideLayout from "../components/city-guide-layout";
import { getCityGuideBySlug, getAllCityGuides } from "../../helpers/city-guide-api";

export default function CityGuide(props) {
  return (
    <CityGuideLayout title={props.title} 
                content={props.content} />
  )
}

export async function getStaticProps(context) {
  return {
    props: await getCityGuideBySlug(context.params.slug)
  }
}

export async function getStaticPaths() {
  let paths = await getAllCityGuides()
  paths = paths.map(city => ({
    params: { slug:city.slug }
  }));
  return {
    paths: paths,
    fallback: false
  }
};