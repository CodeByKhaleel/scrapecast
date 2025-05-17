declare interface User {
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
  id: string;
}

type VideoFormValues = {
  title: string;
  description: string;
  tags: string;
  visibility: "public" | "private";
};

declare interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: Array<{ value: string; label: string }>;
}

declare interface FileInputProps {
  id: string;
  label: string;
  accept: string;
  file: File | null;
  previewUrl: string | null;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
  type: "video" | "image";
}

declare interface TranscriptEntry {
  time: string;
  text: string;
}

declare interface VideoFormValues {
  title: string;
  description: string;
  tags: string;
  visibility: "public" | "private";
}
declare interface NavbarProps {
  user: User | undefined;
}

declare interface SearchResult {
  video: {
    id: string;
    videoId: string;
    title: string;
    thumbnailUrl: string;
  };
  user: {
    id: string;
    name: string | null;
    image: string | null;
  } | null;
}

declare interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  userImg: string;
  username: string;
  createdAt: Date;
  views: number;
  visibility: Visibility;
  duration: number | null;
}

declare interface VideoDetailHeaderProps {
  title: string;
  createdAt: Date;
  userImg: string | null | undefined;
  username?: string;
  videoId: string;
  ownerId: string;
  visibility: string;
  thumbnailUrl: string;
}

declare interface VideoPlayerProps {
  videoId: string;
  className?: string;
}
declare interface VideoInfoProps {
  transcript?: string;
  title: string;
  createdAt: Date;
  description: string;
  videoId: string;
  videoUrl: string;
}

declare interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  fallback?: string;
  alt: string;
  src: string | null;
}

type Visibility = string;

declare interface VideoDetails {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  tags: string | string[];
  visibility: Visibility;
  duration?: number | null;
}

declare interface BunnyVideoResponse {
  guid: string;
  status: number;
  encodeProgress?: number;
}

declare type ApiResponse<T> =
  | ({ success: true; error: null } & T)
  | { success: false; error: string };

declare interface ApiFetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: object;
  expectJson?: boolean;
  bunnyType: "stream" | "storage";
}

declare interface BunnyStreamApiOptions {
  method?: string;
  body?: object;
}

declare interface VideoUploadUrlResponse {
  videoId: string;
  uploadUrl: string;
  accessKey: string;
}

declare interface ThumbnailUploadUrlResponse {
  uploadUrl: string;
  cdnUrl: string;
  accessKey: string;
}

declare interface VideoProcessingStatus {
  isProcessed: boolean;
  encodingProgress: number;
  status: number;
}

declare interface VideoWithUserResult {
  video: {
    id: string;
    videoId: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    userId: string;
    views: number;
    tags: string[];
    visibility: Visibility;
    createdAt: Date;
    updatedAt: Date;
  };
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
}

declare interface VideoObject {
  id: string;
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  userId: string;
  views: number;
  tags: string[];
  visibility: Visibility;
  createdAt: Date;
  updatedAt: Date;
}

declare interface UserWithVideos {
  user: {
    id: string;
    name: string | null;
    image: string | null;
    email: string | null;
  };
  videos: VideoObject[];
  count: number;
}

declare interface ExtendedMediaStream extends MediaStream {
  _originalStreams?: MediaStream[];
}

declare interface SharedHeaderProps {
  subHeader: string;
  title: string;
  userImg?: string;
}

declare interface SharedHeaderProps {
  subHeader: string;
  title: string;
  userImg?: string;
}

declare interface Params {
  params: Promise<Record<string, string>>;
}

declare interface SearchParams {
  searchParams: Promise<Record<string, string | undefined>>;
}

declare interface ParamsWithSearch {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | undefined>>;
}

declare interface DropdownListProps {
  options: string[];
  selectedOption: string;
  onOptionSelect: (option: string) => void;
  triggerElement: ReactNode;
}

declare interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
}

declare interface MediaStreams {
  displayStream: MediaStream;
  micStream: MediaStream | null;
  hasDisplayAudio: boolean;
}

declare interface BunnyRecordingState {
  isRecording: boolean;
  recordedBlob: Blob | null;
  recordedVideoUrl: string;
  recordingDuration: number;
}

declare interface ExtendedMediaStream extends MediaStream {
  _originalStreams?: MediaStream[];
}

// Types
interface VideoQueryResult {
  video: typeof videos.$inferSelect;
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
}

interface PaginationResult<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    pageSize: number | unknown;
  };
}

declare interface RecordingHandlers {
  onDataAvailable: (e: BlobEvent) => void;
  onStop: () => void;
}

const dummyCards = [
  {
    id: "1",
    title: "Snapchat message",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-05-01"),
    userImg: "/assets/images/jason.png",
    username: "jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "2",
    title: "Morning Vlog Routine",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-05-03"),
    userImg: "/assets/images/alex.png",
    username: "emily",
    views: 45,
    visibility: "public",
    duration: 210,
  },
  {
    id: "3",
    title: "How to Make Pancakes",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-04-28"),
    userImg: "/assets/images/david.png",
    username: "sam",
    views: 82,
    visibility: "private",
    duration: 184,
  },
  {
    id: "4",
    title: "Coding a Portfolio Website",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-05-10"),
    userImg: "/assets/images/emily.png",
    username: "linda",
    views: 135,
    visibility: "public",
    duration: 420,
  },
  {
    id: "5",
    title: "Travel to Japan Vlog",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-04-25"),
    userImg: "/assets/images/jessica.png",
    username: "tom",
    views: 234,
    visibility: "unlisted",
    duration: 298,
  },
  {
    id: "6",
    title: "Top 5 Coding Tips",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-05-12"),
    userImg: "/assets/images/michael.png",
    username: "zoe",
    views: 110,
    visibility: "public",
    duration: 195,
  },
  {
    id: "7",
    title: "Fitness at Home",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-05-05"),
    userImg: "/assets/images/sarah.png",
    username: "ryan",
    views: 75,
    visibility: "public",
    duration: 252,
  },
  {
    id: "8",
    title: "React Tutorial for Beginners",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-05-15"),
    userImg: "/assets/images/sarah.png",
    username: "sarah",
    views: 320,
    visibility: "public",
    duration: 610,
  }
];
