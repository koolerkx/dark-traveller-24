import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import { Point, PointChip } from "./HomeCaptureCard";
import "./RankingTable.css";

const RankingItem: React.FC<{
  label: string;
  rank: number;
  points: Point[];
}> = ({ label, rank, points }) => {
  return (
    // <IonItem>
    //   <IonLabel>{rank}</IonLabel>
    //   <IonLabel>{label}</IonLabel>
    // </IonItem>

    <IonAccordion value={rank.toString()}>
      <IonItem slot="header">
        <IonLabel>
          {rank}. {label}
        </IonLabel>
      </IonItem>
      <div className="ion-padding ranking-point-list" slot="content">
        {points.map((point) => (
          <PointChip key={point.label} label={point.label} level={0} />
        ))}
      </div>
    </IonAccordion>
  );
};

interface ContainerProps {}

const RankingTable: React.FC<ContainerProps> = () => {
  const teams = [
    {
      name: "SY1",
      points: [
        { label: "天瑞體育館" },
        { label: "天水圍運動場" },
        { label: "濕地公園門口" },
        { label: "天水圍單車匯合中心" },
        { label: "天瑞體育館" },
        { label: "天水圍運動場" },
        { label: "濕地公園門口" },
        { label: "天水圍單車匯合中心" },
      ],
    },
    {
      name: "SY2",
      points: [{ label: "天瑞體育館" }, { label: "天水圍運動場" }],
    },
    {
      name: "小火龍",
      points: [{ label: "天瑞體育館" }, { label: "天水圍運動場" }],
    },
    {
      name: "比卡超",
      points: [{ label: "天瑞體育館" }, { label: "天水圍運動場" }],
    },
    {
      name: "Apple Watch",
      points: [{ label: "天瑞體育館" }, { label: "天水圍運動場" }],
    },
    {
      name: "有朋自遠方來，不亦樂乎。",
      points: [{ label: "天瑞體育館" }, { label: "天水圍運動場" }],
    },
  ];

  return (
    // <IonList lines="full">
    //   {teams.map((team, idx) => (
    //     <IonItem>
    //       <IonLabel>{idx + 1}</IonLabel>
    //       <IonLabel>{team.name}</IonLabel>
    //     </IonItem>
    //   ))}
    // </IonList>

    <IonList inset={true}>
      <IonAccordionGroup>
        {teams.map((team, idx) => (
          <RankingItem
            key={team.name}
            label={team.name}
            rank={idx + 1}
            points={team.points}
          />
        ))}
      </IonAccordionGroup>
    </IonList>
  );
};

export default RankingTable;
