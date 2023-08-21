import { CustomHead } from "@/components/Head";
import { ArchiveSelect } from "@/components/WorksList/ArchiveSelect";
import { WorkItem } from "@/components/WorksList/WorkItem";
import { Layout } from "@/components/Layout/Layout";
import { Pagination } from "@/components/Pagination/Pagination";
import { getWorksData, getUniqueDates } from "@/utils/getWorksData";
import styles from "@/components/WorksList/WorksList.module.scss";

export default function Works({
  works,
  category,
  tag,
  totalCount,
  uniqueDates,
}) {
  const totalPages = Math.ceil(totalCount / works.length);

  return (
    <Layout showSidebar={true} category={category} tag={tag} works={works}>
      <CustomHead title="WORKS TOP" />
      <section className={`${styles.works} section`}>
        <div className="box">
          <h2 className="title">WORKS</h2>
          {/* <ArchiveSelect uniqueDates={uniqueDates} /> */}
          <ul className={styles.worksList}>
            {works.map((work) => (
              <WorkItem key={work.id} work={work} />
            ))}
          </ul>
        </div>
        {totalPages > 1 && (
          <Pagination currentPage={1} totalPages={totalPages} />
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const { works, category, tag, totalCount } = await getWorksData(1, "", "", 5);
  const uniqueDates = await getUniqueDates();

  return {
    props: {
      works,
      category,
      tag,
      totalCount,
      currentPage: 1,
      uniqueDates,
    },
  };
}
