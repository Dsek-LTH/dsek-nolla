import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Container = styled.div``;

export default function DesktopMenuItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const router = useRouter();
  return (
    <Container>
      <Link href={href}>
        <a style={{ fontWeight: router.asPath === href ? 700 : 400 }}>
          {label}
        </a>
      </Link>
    </Container>
  );
}
