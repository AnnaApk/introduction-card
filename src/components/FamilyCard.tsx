import { FamilyInfo } from '../types';

interface Props {
  member: FamilyInfo;
}

export default function FamilyCard({ member }: Props) {
  return (
    <div className="family-card">
      <h3>{member.name}</h3>
      <p className="role">{member.role}</p>
      <p className="description">{member.description}</p>
    </div>
  );
}