import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

// purpose is to Lazy load to avoid hydration mismatch
const PropertyDetail = dynamic(() => import("@/components/property/PropertyDetail"), { ssr: false });

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${id}`);
        setProperty(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error("Error fetching property details:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!property) return <div className="min-h-screen flex items-center justify-center">Property not found.</div>;

  return <PropertyDetail property={property} />;
}
