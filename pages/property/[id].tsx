import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";

// purpose is to Lazy load to avoid hydration mismatch
const PropertyDetail = dynamic(
  () => import("@/components/property/PropertyDetail"),
  { ssr: false }
);

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only proceed if `id` exists and is a string
    if (!id || typeof id !== "string") return;

    console.log("✅ Fetched ID from router:", id);

    const fetchProperty = async () => {
      try {
        // Commented out the environment variable usage that was causing inofte redirect loop becaus of next js rewriting
        // const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${id}`);
        const response = await axios.get(`/api/properties/${id}`);

        if (response.status === 200 && response.data?.id) {
          console.log("✅ Fetched Property:", response.data);
          setProperty(response.data);
        } else {
          console.warn("⚠️ No valid property returned", response.data);
          setProperty(null);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(
          "❌ Error fetching property details:",
          error?.response?.data || error.message
        );
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (!property)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Property not found.
      </div>
    );

  return <PropertyDetail property={property} />;
}
