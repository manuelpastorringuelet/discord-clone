import { redirect } from "next/navigation";

import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import InitialModal from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
    include: {
      channels: {
        where: {
          name: "general",
        },
        orderBy: {
          createAt: "asc",
        },
      },
    },
  });

  const initialChannel = server?.channels[0];

  if (server) {
    return redirect(`/servers/${server.id}/channels/${initialChannel?.id}`);
  }

  return <InitialModal />;
};

export default SetupPage;
