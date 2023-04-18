
import { useAthorization } from "../hooks/useAuthorization";

function FeedPage() {

  useAthorization()

  return (
    <main>
      <h1>Página de Feed</h1>
    </main>
  );
}

export default FeedPage;