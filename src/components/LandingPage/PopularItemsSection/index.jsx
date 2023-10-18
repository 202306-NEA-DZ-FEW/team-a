import Container from "@/components/container";
import ProductCard from "@/components/ProductCard";
import { useTranslation } from "next-i18next";

function PopularItemsSection() {
  const { t } = useTranslation();
  const items = [
    {
      id: 1,
      title: "sweater",
      location: "djelfa",
      description: "lorem ipsum dolor sit amet, consectetur adipiscing...",
      tag: "swap",
      category: "clothes",
      imageUrl:
        "https://images.unsplash.com/photo-1560060141-7b9018741ced?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1479&q=80",
    },
    {
      id: 2,
      title: "sofa",
      location: "medea",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
      tag: "donation",
      category: "furniture",
      imageUrl:
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "headsets",
      location: "sba",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
      tag: "request",
      category: "electronics",
      imageUrl:
        "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80",
    },
    {
      id: 4,
      title: "hat",
      location: "algiers",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
      tag: "swap",
      category: "clothes",
      imageUrl:
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 5,
      title: "poncho",
      location: "batna",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
      tag: "donation",
      category: "clothes",
      imageUrl:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1410&q=80",
    },
  ];
  return (
    <Container className='lg:min-h-screen my-20 flex flex-col justify-center'>
      <h1 className='text-3xl md:text-5xl font-bold text-center mb-14'>
        {t("landingPage:items")}
      </h1>
      <div className='flex justify-center items-center flex-wrap gap-4'>
        {items.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
}
export default PopularItemsSection;
