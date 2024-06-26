import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { PointChip } from "./HomeCaptureCard";
import "./RankingTable.css";
import { User } from "../repository/user";

const RankingItem: React.FC<{
  rank: number;
  user: User;
}> = ({ user, rank }) => {
  return (
    <IonAccordion value={rank.toString()}>
      <IonItem slot="header">
        <IonLabel>
          {rank}. {user.name}
        </IonLabel>
      </IonItem>

      {user.capturedPoints.length > 0 ? (
        <div className="ion-padding ranking-point-list" slot="content">
          {user.capturedPoints.map((point, idx) => (
            <PointChip
              key={`${idx}|${point.pointId}|${point.userId}`}
              label={point.pointName}
              level={point.level}
            />
          ))}
        </div>
      ) : (
        <div className="ranking-point-none" slot="content">
          <p>沒有正在佔領的攻擊點</p>
        </div>
      )}
    </IonAccordion>
  );
};

interface ContainerProps {
  users: User[];
}

const RankingTable: React.FC<ContainerProps> = ({ users }) => {
  return (
    <IonList inset={true}>
      <IonAccordionGroup>
        {users.map((user, idx) => (
          <RankingItem key={user.id} rank={idx + 1} user={user} />
        ))}
      </IonAccordionGroup>
    </IonList>
  );
};

export default RankingTable;
