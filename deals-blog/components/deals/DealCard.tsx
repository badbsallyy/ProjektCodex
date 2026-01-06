import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { CardHoverEffect } from "@/components/ui";
import { Deal } from "@/types";
import { formatPrice } from "@/lib/utils";

interface DealCardProps {
  deal: Deal;
}

export const DealCard = ({ deal }: DealCardProps) => {
  const ratingLabel = `${deal.rating.toFixed(1)} Sterne`;

  return (
    <CardHoverEffect className="flex h-full flex-col gap-4">
      <Link href={`/deals/${deal.slug}`} className="flex h-full flex-col gap-4">
        <div className="relative h-48 w-full overflow-hidden rounded-xl">
          <Image
            src={deal.imageUrl}
            alt={deal.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
              {deal.shopName}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">{deal.title}</h3>
            <p className="mt-2 text-sm text-white/70">
              {deal.description}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-between">
            <div>
              <p className="text-xs text-white/50 line-through">
                {formatPrice(deal.originalPrice)}
              </p>
              <p className="text-lg font-semibold text-emerald-300">
                {formatPrice(deal.salePrice)}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Star className="h-3 w-3 text-emerald-400" />
              {ratingLabel}
            </div>
          </div>
        </div>
      </Link>
    </CardHoverEffect>
  );
};
