import { ChannelType, MemberRole } from "@prisma/client";

import { ServerWithMembersWithProfiles } from "@/types";

interface ServerSectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "channel" | "member";
  channelType?: ChannelType;
  server?: ServerWithMembersWithProfiles;
}

const ServerSection = ({
  label,
  role,
  sectionType,
  channelType,
  server,
}: ServerSectionProps) => {
  return <div>Server Section</div>;
};

export default ServerSection;
