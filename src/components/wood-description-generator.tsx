"use client";

import { useState } from 'react';
import { generateDescriptionAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader, Wand2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface WoodDescriptionGeneratorProps {
  woodType: string;
  burningCharacteristics: string;
}

export default function WoodDescriptionGenerator({ woodType, burningCharacteristics }: WoodDescriptionGeneratorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setDescription(null);

    const result = await generateDescriptionAction({ woodType, burningCharacteristics });

    if (result.error) {
      toast({
        variant: "destructive",
        title: "Error de IA",
        description: result.error,
      });
    } else if (result.description) {
      setDescription(result.description);
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <Button onClick={handleGenerate} disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-headline">
        {isLoading ? (
          <>
            <Loader className="mr-2 h-4 w-4 animate-spin" />
            Generando...
          </>
        ) : (
          <>
            <Wand2 className="mr-2 h-4 w-4" />
            Generar Descripción con IA
          </>
        )}
      </Button>
      {description && (
        <Card className="bg-card border-primary/50">
          <CardContent className="p-4">
            <p className="text-sm text-foreground/90 italic">{description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
