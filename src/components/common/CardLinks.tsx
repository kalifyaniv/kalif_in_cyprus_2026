import { ExternalLink, FileText } from "lucide-react";

interface CardLinksProps {
  bookingUrl?: string;
  bookingLabel?: string;
  driveFileId?: string;
}

export function CardLinks({ bookingUrl, bookingLabel = "View booking", driveFileId }: CardLinksProps) {
  if (!bookingUrl && !driveFileId) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-line pt-2.5 text-xs font-semibold">
      {bookingUrl && (
        <a
          href={bookingUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-accent hover:underline"
        >
          <ExternalLink size={12} /> {bookingLabel}
        </a>
      )}
      {driveFileId && (
        <a
          href={`https://drive.google.com/file/d/${driveFileId}/view`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-teal hover:underline"
        >
          <FileText size={12} /> Confirmation (Drive)
        </a>
      )}
    </div>
  );
}
