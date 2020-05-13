setTimeout(() => {
  const sgWidget = document.getElementById("js--region-sidebar-footer");
  if (sgWidget !== null) sgWidget.remove();
  const friendsWidget = document.getElementById("js--region-sidebar");
  if (friendsWidget !== null) friendsWidget.remove();
  const banner = document.getElementById("js--banner");
  if (banner !== null) banner.remove();
});
