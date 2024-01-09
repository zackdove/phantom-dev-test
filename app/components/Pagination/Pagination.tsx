import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import * as Styled from "./Pagination.styles";

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams?.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams ? searchParams : "");
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const generatePagination = (currentPage: number, totalPages: number) => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages - 1, totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
    }
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      <Styled.Wrapper>
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        {allPages.map((page, index) => {
          let position: "first" | "last" | "single" | "middle" | undefined;

          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={page}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </Styled.Wrapper>
    </>
  );
};

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}) {
  return (
    <Styled.Number href={href} $isDisabled={isActive || position === "middle"}>
      {page}
    </Styled.Number>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const icon = direction === "left" ? "←" : "→";

  return (
    <Styled.Arrow href={href} $isDisabled={isDisabled}>
      {icon}
    </Styled.Arrow>
  );
}

export { Pagination };
