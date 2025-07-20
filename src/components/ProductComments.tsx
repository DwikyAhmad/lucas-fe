"use client";

import React, { useState, useEffect } from "react";
import { Star, MessageCircle, User, Send } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Comment {
    id: string;
    content: string;
    rating: number;
    createdAt: string;
    user: {
        name: string;
        email: string;
    };
}

interface ProductCommentsProps {
    productId: string;
}

const StarRating = ({ rating, interactive = false, onRatingChange }: { 
    rating: number; 
    interactive?: boolean; 
    onRatingChange?: (rating: number) => void;
}) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                    key={star}
                    className={`w-5 h-5 ${
                        star <= (interactive ? hoverRating || rating : rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                    } ${interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
                    onClick={interactive ? () => onRatingChange?.(star) : undefined}
                    onMouseEnter={interactive ? () => setHoverRating(star) : undefined}
                    onMouseLeave={interactive ? () => setHoverRating(0) : undefined}
                />
            ))}
        </div>
    );
};

const CommentCard = ({ comment }: { comment: Comment }) => (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-3">
                <div className="bg-primaryBlueNavy text-white rounded-full w-8 h-8 flex items-center justify-center">
                    <User size={16} />
                </div>
                <div>
                    <div className="font-medium text-primaryBlueNavy">{comment.user.name}</div>
                    <div className="text-xs text-gray-500">
                        {new Date(comment.createdAt).toLocaleDateString()}
                    </div>
                </div>
            </div>
            <StarRating rating={comment.rating} />
        </div>
        <p className="text-gray-700 leading-relaxed">{comment.content}</p>
    </div>
);

const CommentForm = ({ 
    productId, 
    onCommentAdded 
}: { 
    productId: string; 
    onCommentAdded: () => void;
}) => {
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!content.trim()) {
            setError("Please write a comment");
            return;
        }
        
        if (rating === 0) {
            setError("Please select a rating");
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            await axios.post("/api/comment/create", {
                content: content.trim(),
                rating,
                productId
            });
            
            setContent("");
            setRating(0);
            onCommentAdded();
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 401) {
                // Redirect to login with return URL
                const currentUrl = window.location.pathname;
                router.push(`/login?redirect=${encodeURIComponent(currentUrl)}`);
            } else {
                setError("Failed to submit comment. Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-primaryBlueNavy mb-4">Write a Review</h3>
            
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                </label>
                <StarRating 
                    rating={rating} 
                    interactive 
                    onRatingChange={setRating} 
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review
                </label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Share your experience with this product..."
                    className="w-full px-3 text-primaryBlueNavy py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlueNavy focus:border-transparent resize-none"
                    rows={4}
                    maxLength={1000}
                />
                <div className="text-xs text-gray-500 mt-1">
                    {content.length}/1000 characters
                </div>
            </div>

            {error && (
                <div className="text-red-600 text-sm mb-4 bg-red-50 p-2 rounded">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting || !content.trim() || rating === 0}
                className="w-full bg-primaryBlueNavy text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                <Send size={16} />
                {isSubmitting ? "Submitting..." : "Submit Review"}
            </button>
        </form>
    );
};

export default function ProductComments({ productId }: ProductCommentsProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchComments = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/comment/product/${productId}`);
            setComments(response.data.comments || []);
        } catch (error) {
            console.error("Failed to fetch comments:", error);
            setError("Failed to load comments");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (productId) {
            fetchComments();
        }
    }, [productId]);

    const averageRating = comments.length > 0 
        ? comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length 
        : 0;

    if (loading) {
        return (
            <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
                    <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="h-20 bg-gray-200 rounded"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="text-primaryBlueNavy" size={24} />
                <div>
                    <h2 className="text-xl font-bold text-primaryBlueNavy">
                        Customer Reviews
                    </h2>
                    {comments.length > 0 && (
                        <div className="flex items-center gap-2 mt-1">
                            <StarRating rating={Math.round(averageRating)} />
                            <span className="text-sm text-gray-600">
                                {averageRating.toFixed(1)} out of 5 ({comments.length} review{comments.length !== 1 ? 's' : ''})
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <div className="space-y-6">
                <CommentForm productId={productId} onCommentAdded={fetchComments} />

                {error && (
                    <div className="text-red-600 text-center py-4 bg-red-50 rounded-lg">
                        {error}
                    </div>
                )}

                {comments.length === 0 && !error ? (
                    <div className="text-center py-8 text-gray-500">
                        <MessageCircle size={48} className="mx-auto mb-3 text-gray-300" />
                        <p>No reviews yet. Be the first to review this product!</p>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {comments.map((comment) => (
                            <CommentCard key={comment.id} comment={comment} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
} 