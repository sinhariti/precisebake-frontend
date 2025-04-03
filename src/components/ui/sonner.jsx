import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    (<Sonner
      theme={theme}
      duration={1500} 
      className="toaster group"
      style={
        {
          "--normal-bg": "white",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "opacity": "1"
        }
      }
      {...props} />)
  );
}

export { Toaster }
