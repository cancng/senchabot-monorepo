import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
} from "@mui/material";
import { SiDiscord, SiTwitch } from "react-icons/si";
import LoadingBox from "../loading/LoadingBox";
import { trpc } from "../../utils/trpc";
import { IBotActionActivity } from "../../types";

const BotActivity = () => {
  const botActivities = trpc.bot.getBotActivities.useQuery();

  return (
    <Paper sx={{ mt: "10px", padding: "10px" }} elevation={1}>
      <Stack>
        <List
          dense={false}
          sx={{ width: "100%" }}
          subheader={
            <ListSubheader disableSticky>Recent bot activities:</ListSubheader>
          }
          disablePadding>
          {!botActivities.isLoading ? (
            botActivities.data?.length ? (
              botActivities.data?.map(
                (activity: IBotActionActivity, index: number) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      {activity.botPlatformType === "twitch" ? (
                        <SiTwitch />
                      ) : (
                        <SiDiscord />
                      )}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        activity.botActivity.startsWith("!")
                          ? `Command executed: ${activity.botActivity}`
                          : activity.botActivity
                      }
                      secondary={`${activity.activityDate.toDateString()} ${activity.activityDate
                        .toTimeString()
                        .slice(0, 8)} / ${
                        activity.activityAuthor ?? "Senchabot"
                      }`}
                    />
                  </ListItem>
                ),
              )
            ) : (
              <ListItem>
                <ListItemText primary="No data." />
              </ListItem>
            )
          ) : (
            <LoadingBox />
          )}
        </List>
      </Stack>
    </Paper>
  );
};

export default BotActivity;
