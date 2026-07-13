interface CamperPageProps {
  params: Promise<{ camperId: string }>;
}

export default async function CamperDetailPage({ params }: CamperPageProps) {
  const resolvedParams = await params;
  
  return (
    <div style={{ padding: 40 }}>
      <h1>Camper Details Page</h1>
      <p>Viewing camper with ID: {resolvedParams.camperId}</p>
    </div>
  );
}