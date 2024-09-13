import ClientFix from "@/lib/ClientFix";
import EmptyState from "./_components/EmptyState";
import Container from "./_components/Container";
import getListings, { getListingsInterface } from "./_actions/getListings";
import ListingCard from "./_components/listings/ListingCard";
import getCurrentUser from "./_actions/getCurrentUser";

interface HomeInterface {
  searchParams: getListingsInterface;
}

export default async function Home({ searchParams }: HomeInterface) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return (
      <ClientFix>
        <EmptyState showReset />
      </ClientFix>
    );
  }
  return (
    <ClientFix>
      <Container>
        <div className="pt-[120px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing: any) => {
            return (
              <ListingCard
                key={listing.id}
                currentUser={currentUser}
                data={listing}
              />
            );
          })}
        </div>
      </Container>
    </ClientFix>
  );
}
