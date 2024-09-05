import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// Layout
import Navigation from "./Navigation";

function Header() {
  return (
    <AppBar position="sticky" className="p-l">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="row-space-between">
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            IDEXPI
          </Typography>
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
