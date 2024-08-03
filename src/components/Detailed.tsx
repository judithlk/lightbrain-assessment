"use client";

import DetailCard from "./DetailCard";
import { useGetListingsQuery } from "@/redux/services/listing.service";

export default function Detailed() {
  const { data: listingData } = useGetListingsQuery();
  return (
    <div className="w-[95%] m-auto">
      <h1>Detailed Listings</h1>
      <div className="space-y-3">
        {listingData?.map((listing: any) => (
          <DetailCard
            key={listing?.id}
            image={listing?.image}
            title={listing?.title}
            description={listing?.description}
            cardist={listing?.car_dist}
            walkdist={listing?.walk_dist}
            traindist={listing?.train_dist}
            facilities={listing?.facilities}
            price={listing?.price}
            showwalk={listing?.walk_dist > 0 ? true : false}
            showtrain={listing?.train_dist > 0 ? true : false}
            showcar={listing?.car_dist > 0 ? true : false}
            reviews={listing?.reviews}
            showreview={listing?.reviews > 0 ? true : false}
            avg_ratings={listing?.avg_rating}
          />
        ))}
      </div>
    </div>
  );
}
