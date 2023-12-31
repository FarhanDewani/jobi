import { Link } from 'react-router-dom';

import { Button } from '@/components/button';
import { PageWrapper } from '@/components/page-wrapper';

export default function Home() {
  return (
    <PageWrapper>
      <Link to="/jobs">
        <Button color="info">Browse Jobs</Button>
      </Link>
      <h1 className="mt-12 text-9xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eum soluta fugiat id
        repudiandae, nulla reiciendis ipsum saepe assumenda commodi temporibus ipsa consequatur
        consectetur tempora? Dolore consequatur nulla distinctio laboriosam?
      </h1>
    </PageWrapper>
  );
}
