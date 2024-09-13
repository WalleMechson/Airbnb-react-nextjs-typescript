import { useRouter } from "next/navigation";
import { SafeUser } from "../_types";
import useModalStore from "./use-modal-store";
import { useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface useFavoriteInterface {
  listingId: string;
  currentUser: SafeUser | null | undefined;
}

const useFavorite = ({ listingId, currentUser }: useFavoriteInterface) => {
  const router = useRouter();
  const { onOpen } = useModalStore();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) return onOpen("loginModal");

      try {
        let request;
        let stateHasFavorited: boolean = hasFavorited;
        if (stateHasFavorited)
          request = () => axios.delete(`/api/favorites/${listingId}`);
        else request = () => axios.post(`/api/favorites/${listingId}`);

        await request();
        router.refresh();
        if (!stateHasFavorited) toast.success("Added to favorites!");
        if (stateHasFavorited) toast.success("Removed from favorities!");
      } catch (err) {
        toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, listingId, onOpen, router]
  );
  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
