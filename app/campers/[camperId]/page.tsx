interface CamperPageProps {
  params: Promise<{ id: string }>;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function CamperDetailPage({ params }: CamperPageProps) {
  const {id} = await params;

  await delay(3000);
  
  return (
    <div style={{ padding: 40 }}>
      <h1>Camper Details Page</h1>
      <p>Viewing camper with ID: <strong>{id}</strong></p>
    </div>
  );
}